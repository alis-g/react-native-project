import axios from "axios";

const base = axios.create({
    baseURL: 'https://vzwxgquhuqmmlrkbctva.supabase.co',
    headers: {
        'apikey': 'sb_publishable_h2uiMSuXVBQuGh-TGe9_JQ_COp8VKtN',
        'Content-Type': 'application/json'
    }
})

const api = axios.create({
    ...base.defaults,
    baseURL: `${base.defaults.baseURL}/rest/v1`
})

export default api