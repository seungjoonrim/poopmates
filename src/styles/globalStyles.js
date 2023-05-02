import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    color: "gray",
    backgroundColor: "#bfbfbf",
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    minWidth: 150,
  },
  button: {
    backgroundColor: '#6200EE',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  list: {
    marginTop: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  link: {
    marginTop: 15,
    textAlign: 'center',
    color: '#007AFF',
  },
});

export default globalStyles;
