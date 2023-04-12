const Header = ({genre}) => {
  return (  
    <h1>Top 20 for the {genre==="All" ? "Full" : genre} Chart</h1>
  );
}
 
export default Header;