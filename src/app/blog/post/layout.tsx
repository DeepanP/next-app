import { Children } from "react"

const PostLayout = ({children}) => {
    return (
        <div>{children}
        <span>post footer sharelink</span>
        </div>
        
    )
};

export default PostLayout;