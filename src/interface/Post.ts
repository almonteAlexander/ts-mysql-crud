interface IPost{
    id?: number,
    title: string,
    description: string,
    image_url: string,
    created_at?: Date
}

export default IPost;