import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/outline"
import {
    HeartIcon as HeartIconFilled
} from "@heroicons/react/solid"


function Post({ id, username, userImg, img, caption }) {

    return (
        <div className="bg-white border rounded-sm my-7">

            {/*header*/}
            <div className="flex items-center p-5">
                <img className="rounded-full h-12 w-12 object-cover border p-1 mr-3 cursor-pointer hover:scale-110 transition transform duration-200 east-out" src={userImg} alt="post user image" />
                <p className="flex-1 font-medium">{username}</p>
                <DotsHorizontalIcon className="h-5 cursor-pointer hover:scale-110 transition transform duration-200 ease-out " />
            </div>

            {/*img*/}
            <img src={img} className="objet-cover w-full" alt="" />
            {/*buttons*/}
            <div className="flex justify-between px-4 pt-4">
                <div className="flex space-x-4">
                    <HeartIcon className="btn" />
                    <ChatIcon className="btn" />
                    <PaperAirplaneIcon className="btn rotate-45" />
                </div>
                <BookmarkIcon className="btn" />
            </div>
       
            {/*caption*/}
            <p className="p-5 truncate">
                <span className="font-medium mr-1">{username}</span>
                {caption}
            </p>

            {/*comments*/}
            {/*input box*/}
            <form className="flex items-center p-4">
                <EmojiHappyIcon className="h-7 cursor-pointer"/>
                <input type="text" className="flex-1 border-none focus:ring-0 outline-none p-2" placeholder="Add a comment..." />
                <button className="text-gonza-violet-500 hover:text-gonza-violet-700 font-bold py-2 px-4 rounded-sm">Post</button>
            </form>

        </div>
    )
}

export default Post
