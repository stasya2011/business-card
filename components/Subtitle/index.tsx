const SubTitle = ({
  anchor,
  children,
}: {
  anchor: string;

  children: string;
}) => {
  return (
    <h2 style={{ fontSize: 30, marginBottom: 30 }} id={anchor}>
      {children}
    </h2>
  );
};

export default SubTitle;
