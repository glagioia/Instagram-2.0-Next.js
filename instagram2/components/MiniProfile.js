function MiniProfile() {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img className="rounded-full border p-[2px] w-16 h-16" src="https://mir-s3-cdn-cf.behance.net/user/115/4952f2889290823.60af11b761920.jpg" alt="user miniprofile img" />

            <div>
               <h2 className="font-medium">glagioia</h2> 
               <h3 className="text-sm text-gray-400">Gonzalo Sebastian Lagioia</h3>
            </div>

            <button className="text-gonza-violet-500 text-sm font-semibold">Sign Out</button>
        </div>
    )
}

export default MiniProfile
