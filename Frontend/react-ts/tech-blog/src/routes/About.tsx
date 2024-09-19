import SectionContainer from "../components/SectionContainer";

export default function About() {
  return (
    <SectionContainer>
      <h3 className="text-2xl font-bold mb-4">About</h3>
      <blockquote className="w-2/4 border-l-4 pl-2 my-4">
        <em>
          We write and we later read. We save and we later retrieve. We store
          and we later access. The function of memory is to keep information
          intact between those two events.
        </em>
      </blockquote>
      <p className="w-2/4">
        I write my learnings, thoughts, ideas and everything that runs into my
        mind that I feel like writing about.
      </p>
    </SectionContainer>
  );
}
