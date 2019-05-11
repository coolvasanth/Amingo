export class Global {
    public static BASE_PROVIDER_URL = "https://jsonplaceholder.typicode.com";
    
    // post related
    public static BASE_GET_ALL_POSTS = "posts";
    public static BASE_GET_USER_POSTS = "posts?userId=";

    //comments related
    public static BASE_GET_COMMENTS_OF_POST = "comments?postId="

    // user related
    public static BASE_GET_USERS = "users"

    public static BASE_COMMON_DATA_ERROR = "No data found"
    public static BASE_COMMON_API_ERROR = "Errow while getting the data, please try after sometime"
}