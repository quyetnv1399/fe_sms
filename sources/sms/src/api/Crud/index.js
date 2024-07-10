import Api from ".."; 


const getAll = async () => {
    let res = await Api.get("/view-all-providers")
    return res
}

export {
    getAll
}