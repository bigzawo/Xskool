import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

// Dummy data (replace with actual API calls or local storage)
const dummyCourses = [
    { id: '1', name: 'Math 101', description: 'Introduction to Calculus' },
    { id: '2', name: 'Physics 201', description: 'Classical Mechanics' },
    { id: '3', name: 'Computer Science 101', description: 'Introduction to Programming' },
    { id: '4', name: 'History 101', description: 'World History' },
    { id: '5', name: 'English Literature', description: 'British Literature' },

];

const CourseScreen = ({ navigation }) => { // Receive navigation prop

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching data (replace with actual API calls)
        setTimeout(() => {
            setCourses(dummyCourses);
            setLoading(false);
        }, 1000);
    }, []);

    const renderCourseItem = ({ item }) => (
        <TouchableOpacity
            style={styles.courseItem}
            onPress={() => navigation.navigate('CourseDetails', { course: item })} // Navigate on press
        >
            <Text style={styles.courseName}>{item.name}</Text>
            <Text style={styles.courseDescription}>{item.description}</Text>
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#007bff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>My Courses</Text>
            <FlatList
                data={courses}
                renderItem={renderCourseItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f4f4f4',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
    },
    courseItem: {
        backgroundColor: 'white',
        padding: 16,
        marginBottom: 8,
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    courseName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    courseInstructor: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 4,
    },
    courseDescription: {
        fontSize: 14,
        color: 'darkgray',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CourseScreen;
