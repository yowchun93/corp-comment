import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";


const feedbackItems = [
  {
    upvoteCount: 593,
    badgeLetter: "B",
    companyName: "ByteGrad",
    text: "test",
  }
]

export default function FeedbackList() {
  // we also need a Loading state
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch('api').then(response => {
      return response.json();
    }).then((data) => {
      console.log(data.feedbacks);
      setFeedbackItems() //
    })
  }, [])
}