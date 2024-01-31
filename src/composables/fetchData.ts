import { ref, watchEffect, toValue, type Ref } from 'vue'

export function useFetch<T>(url: string | Ref | Function) {
    const data = ref<T>();
    const error = ref(null);

    const fetchData = () => {
        data.value = undefined;
        error.value = null;

        fetch(toValue(url))
            .then((res) => res.json())
            .then((json) => (data.value = json as T))
            .catch((err) => (error.value = err));
    }

    watchEffect(() => {
        fetchData();
    })

    return { data, error };
}