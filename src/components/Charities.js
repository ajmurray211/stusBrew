const Charities = () => {
    return (
        <div className="charitiesContainer">
            <div>
                <ul className="body">
                    <li className="">
                        <a className="charatiesLink" href="https://stopsoldiersuicide.org/" target="_blank">
                            Stop Soldier Suicide
                        </a>
                        : organization that supports active duty service members,
                        veterans, and their families. They assist with mental health support and other
                        services.
                    </li>
                    <li className="">
                        <a className="charatiesLink" href="https://www.shrinerschildrens.org/en" target="_blank">
                            Shriners
                        </a>
                        : a health care organization that supports pediatric patients and their
                        families regardless of their ability to pay or insurance status.
                    </li>
                    <li className="">
                        <a className="charatiesLink" href="https://buildamiracle.net/" target="_blank">
                            Build a Miracle
                        </a>
                        : organization that works to build homes for families living in
                        Mexico.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Charities;