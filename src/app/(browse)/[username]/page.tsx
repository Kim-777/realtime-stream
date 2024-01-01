interface UserPageProps {
  params: {
    username: string;
  };
}

const UserPage = ({ params }: UserPageProps) => {
  return <div>{params.username}</div>;
};

export default UserPage;
