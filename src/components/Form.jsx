import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  const handleChange = (e) => {
    setPost((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type}</span> Post
      </h1>

      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label htmlFor="prompt">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>

          <textarea
            id="prompt"
            name="prompt"
            value={post.prompt}
            onChange={handleChange}
            placeholder="Write your prompt here..."
            className="form_textarea"
            required
          />
        </label>

        <label htmlFor="tag">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag
            <span className="font-normal ms-1">
              (product, webdevelopment, idea)
            </span>
          </span>

          <input
            id="tag"
            name="tag"
            value={post.tag}
            onChange={handleChange}
            placeholder="#tag"
            className="form_input"
            required
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            disabled={submitting}
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
