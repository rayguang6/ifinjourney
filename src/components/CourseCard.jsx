import { star } from "../assets/icons";

const CourseCard = ({ imgURL, title, tags, instructor, price }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt={title} className='w-[300px] rounded-md' />
      <div className='mt-2 flex justify-start align-middle gap-2.5'>
        <img src={star} alt='rating icon' width={20} height={20} />
        <p className='font-montserrat text-base leading-normal text-slate-gray'>
          (4.5)
        </p>
      </div>

    {/* tagging label */}
    <div className="mt-1">
        <small className="bg-primary px-4 py-1 rounded-[4px] text-white">{tags}</small>
    </div>

      <h3 className='text-2xl leading-normal font-semibold font-palanquin'>
        {title}
      </h3>
      <p className='font-montserrat text-base leading-normal text-slate-gray'>
          {instructor}
        </p>
      <p className='font-semibold font-montserrat text-primary text-xl leading-normal'>
        {price}
      </p>
    </div>
  );
};


// imgURL: course1,
// title: "Investing 101",
// intructor: "$200.20",
// tags: "Investing",
// price: 'RM 99',
// purchaseLink: '#',

export default CourseCard;