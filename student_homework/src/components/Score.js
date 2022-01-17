function Score(props) {
  return (
    <>
    <thead><tr><th>Score</th>
            <th>Date</th></tr></thead>
            <tr>
      <td>{props.score.score}</td>
      <td>{props.score.date}</td>
      </tr>
    </>
  );
}
export default Score;
