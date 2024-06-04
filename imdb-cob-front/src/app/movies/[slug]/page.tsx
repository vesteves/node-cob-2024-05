export const MoviePage = ({ params }: { params: { slug: string } }) => {
  return <div>Olá mundo! {params.slug}</div>;
};

export default MoviePage;
