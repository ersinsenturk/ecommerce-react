const ProductComments = ({ className, comments }) => {
  return (
    <div className={className}>
      <h3 className="mb-4">Comments</h3>
      <ul className="bg-white p-4 border ">
        {comments.map((comment) => (
          <li key={comment.id} className="mb-4">
            <p className="font-bold">{comment.user.username}</p>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductComments;
