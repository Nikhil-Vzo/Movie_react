import Conditional_Rendering from "../components/Conditional-Rendering";

function Home() {
  return (
    <div className="movie-container">
      <Conditional_Rendering isLogged={true} />
    </div>
  );
}

export default Home;