export const PostReq = async (url, data) => {
    const res = await fetch("/api/" + url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const response = await res.json();
    console.log(response);
    return response;
};

export const GetReq = async (url) => {
    const res = await fetch("/api/" + url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const response = await res.json();
    console.log(response);
    return response;
};
