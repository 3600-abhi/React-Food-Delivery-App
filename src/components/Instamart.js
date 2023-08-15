import { useState } from "react";

function Section(props) {

    return (
        <div className="p-2 m-2 border-4">
            <h1 className="font-bold p-2 text-2xl">{props.title}</h1>
            {props.visibility && <h2>{props.data}</h2>}
            <button
                className="p-2 bg-yellow-500 rounded-md text-white text-sm hover:bg-yellow-700"
                onClick={props.setVisibility}
            >{props.visibility ? "Hide" : "Show"}
            </button>
        </div>
    );
}


function Instamart() {

    const [isShown, setIsShown] = useState(null);

    return (
        <div>
            <h1 className="text-4xl p-3 m-3">Welcome to Instamart</h1>

            <Section
                visibility={isShown === "about"}
                setVisibility={() => setIsShown(isShown === "about" ? null : "about")}
                title="About Instamart"
                data="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure"
            />

            <Section
                visibility={isShown === "team"}
                setVisibility={() => setIsShown( isShown ==="team" ? null : "team")}
                title="Team Instamart"
                data="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat"
            />

            <Section
                visibility={isShown === "career"}
                setVisibility={() => setIsShown(isShown === "career" ? null : "career")}
                title="Careers @ Instamart"
                data="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat"
            />
        </div>
    );
}

export default Instamart;