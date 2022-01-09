import { StyleSheet } from "react-native";
export default StyleSheet.create({
  image: {
    height: 420,
    width: "100%",
    borderBottomLeftRadius: 100,
  },
  indicatorContainer: {
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0,0,0,0.5)",
    top: 40,
    left: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  name: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  listContainer: {
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    backgroundColor: "#ffffff",
    // paddingBottom: 10,
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.19,
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  baslik: {
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
  marvelTitle: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
    color: "#1A237E",
  },
});
