const defaultProps = { color: "blue", size: "medium" };
const props = { size: "large", shape: "round" };
const App = () => <Button {...defaultProps} {...props} />;
