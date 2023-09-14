const Section = (props) => {
  const { children } = props;
  return <section className="mx-auto h-screen px-4">{children}</section>;
};

function Interfaces() {
  return (
    <div className="pl-100">
      <HeroSection />
      <DetailSection />
    </div>
  );
}

function HeroSection() {
  return (
    <Section>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </Section>
  );
}

function DetailSection() {
  return (
    <Section>
      <h1 className="text-3xl font-extrabold">Yummy Yummy</h1>
    </Section>
  );
}
export default Interfaces;
