import PromptCard from "./PromptCard";

const Profile = ({ name, description, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name}</span>
      </h1>

      <p className="desc text-left">{description}</p>

      <div className="feed">
        <div className="prompt_layout">
          {data.map((post) => {
            return (
              <PromptCard
                key={post._id}
                post={post}
                handleEdit={() => handleEdit && handleEdit(post)}
                handleDelete={() => handleDelete && handleDelete(post)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Profile;
