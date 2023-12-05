const SubTitle = ({ children }: { children: string }) => {
  return (
    <h2 style={{ marginBottom: 30, marginTop: 100, fontSize: 30 }}>
      {children}
    </h2>
  );
};

export default SubTitle;
