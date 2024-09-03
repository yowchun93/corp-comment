

type ContainerProps = {
  isLoading: boolean;
  // feedbackItems: <Feedback></Feedback>,
  errorMessage: string;
}

// prop-drilling
export default function Container({ feedbackItems}) {
  return (
    <div className="container">
      <Header />
      <FeedbackList feedbackItems={feedbackItems} />
    </div>
  )
}