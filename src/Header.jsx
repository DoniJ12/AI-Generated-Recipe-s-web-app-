import Logo from "./images/chef-claude-icon.png"
export default function () {
    return(
        <header className = "main-header">
            <img src = {Logo} alt = "Logo-Icon"/>
            <h1>Chef Claude</h1>
        </header>
    )
}