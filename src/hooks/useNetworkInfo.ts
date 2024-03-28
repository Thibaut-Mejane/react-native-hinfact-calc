import { useNetInfo } from "@react-native-community/netinfo"


type NetworkInfo = {
    isConnected: boolean | null
}

type UseNetworkInfo = () => NetworkInfo

const useNetworkInfo: UseNetworkInfo = () => {
    const { isConnected } = useNetInfo()

    return {
        isConnected
    }
}

export default useNetworkInfo