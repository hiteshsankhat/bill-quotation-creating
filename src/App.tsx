import A4Page from "./Page/A4Page";
import EditorPage from "./Page/EditorPage";

function App() {
  return (
    <div className="flex bg-slate-200">
      <div className="w-[calc(100%-210mm)] print:hidden">
        <EditorPage />
      </div>
      <div>
        <A4Page />
      </div>
    </div>
  );
}

export default App;
