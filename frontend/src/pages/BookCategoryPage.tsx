import { BookCategory } from "../util/BookData";
import { useParams, useNavigate } from "react-router-dom";
import ActivityBookList from "../components/ActivityBookList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Background from "../components/Background";
import { toTitleCase } from "../util/toTitleCase";

export default function BookCategoryPage() {
  // try to get the category from the params
  const { categoryString } = useParams();
  const navigate = useNavigate();
  // if the category is not valid, redirect to the home page
  if (!Object.values(BookCategory).includes(categoryString as BookCategory)) {
    navigate("/");
  }
  let category = categoryString as BookCategory;

  return (
    <>
      <Background />
      <Navbar />
      <div className="flex flex-col items-center container mx-auto z-10 min-h-screen">
        <div>
          <img
            src="/background.png"
            alt="KIDATA"
            width={250}
            height={150}
            className="mx-auto"
          />
          <div className="p-4 max-w-lg text-center">
            <h1 className="text-2xl font-bold">Pick a book!</h1>
            <div className="bg-primary-green border-2 border-gray-300 rounded-full text-white p-2 text-xl font-bold">
              {toTitleCase(category)}
            </div>
          </div>
        </div>
        <ActivityBookList category={category} />
      </div>
      <Footer />
    </>
  );
}
