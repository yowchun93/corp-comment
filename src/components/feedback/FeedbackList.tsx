import FeedbackItem from "./FeedbackItem";
import { useEffect, useState } from "react";

type FeedbackItemType = {
  id: number;
  upvoteCount: number;
  badgeLetter: string;
  companyName: string;
  text: string;
};

const feedbackItems = [
  {
    upvoteCount: 593,
    badgeLetter: "B",
    companyName: "ByteGrad",
    text: "test",
  }
]

export default function FeedbackList() {
  // need to add type to useState?
  // const [feedbackItems, setFeedbackItems] = useState([]);
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItemType[]>([]);
  // we also need a Loading state
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")

  // option + esc to access properties
  const handleAddToList = (text) => {
    const newItem: FeedbackItemType = {
      text: text,
      upvoteCount: 0,
      companyName: text.split(''),// look for #in the text
      badgeLetter: text.split(''),
    }

    setFeedbackItems([...feedbackItems, newItem]);

    fetch("api", {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }

  // useEffect(() => {
  //   setIsLoading(true);

  //   fetch('api')
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error("something went wrong")
  //     }
  //     return response.json();
  //   }).then((data) => {
  //     console.log(data.feedbacks);
  //     setFeedbackItems() //
  //   })
  //   .catch(error => {
  //     // network Error
  //     setErrorMessage("")
  //   })
  // }, [])

  // Refactored using async-await
  useEffect(() => {
    const fetchFeedbackItems = async () => {
      try {
        const response = await fetch(
          "api-endpoint"
        );
        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        // setFeedbackItems()
      }

      setIsLoading(false);
    }
  })

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}

      {errorMessage && <ErrorMessage message={errorMessage} />}

      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}