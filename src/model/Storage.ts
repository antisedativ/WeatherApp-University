
export const storage = {
    setItem: (name: string, item: any) => {
        localStorage.setItem(name,JSON.stringify(item))
    },
    getItem: (name: string) => {
        const item = localStorage.getItem(name)

        if(name)
            return JSON.parse(item || '{}')
    }
}