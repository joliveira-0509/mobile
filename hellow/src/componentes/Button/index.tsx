import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

type Props = {
    title: string;
    onPress?: () => void;
    activeOpacity?: number;
}

export function Button(props: Props) {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={props.activeOpacity}
            onPress={props.onPress}
        >
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )
}