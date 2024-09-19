import Header from "../Header/Header";
import LetterBody from "../LetterBody/LetterBody";

const A4Page = () => {
  return (
    <div className="h-[296mm] w-[210mm] bg-white">
      <Header />
      <LetterBody />
    </div>
  );
};

export default A4Page;
