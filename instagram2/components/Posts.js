import Post from './Post'

const posts = [
    {
        id: 1,
        username: 'glagioia',
        userImg: 'https://mir-s3-cdn-cf.behance.net/user/115/4952f2889290823.60af11b761920.jpg',
        img: 'https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        caption: 'Alguna frase inspiradora'

    },
    {
        id: 2,
        username: 'glagioia',
        userImg: 'https://mir-s3-cdn-cf.behance.net/user/115/4952f2889290823.60af11b761920.jpg',
        img: 'https://images.pexels.com/photos/187842/pexels-photo-187842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        caption: 'Estrenando mi nueva camara'
        
    }
]


function Posts() {
    return (
        <div>
           {posts.map(post => (
                <Post key={post.id}
                id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}
                  />
           ))}
        </div>
    )
}

export default Posts
