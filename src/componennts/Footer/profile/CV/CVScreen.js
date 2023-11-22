import React, { useState } from 'react';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { useCallback, useMemo, useRef } from 'react';
import { View, Text, Button, Modal, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import ExperienceBottomSheet from './ExperienceBottomSheet';
import UploadCVScreen from './UploadCVScreen ';
import EducationForm from './EducationBottomSheet';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../../../../Constants/theme';


const colors = ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF', '#BDB2FF', '#FFC6FF'];

const ExperienceItem = ({ item, index ,onDelete}) => {
    const itemStyle = {
      ...styles.experienceItem,
      marginRight:15,
      backgroundColor: colors[index % colors.length], // Pick a color based on index
    };
  
    return (
      <View style={itemStyle}>
         <Icon 
        name="trash" 
        type="font-awesome" 
        size={20} 
        color="#000" 
        onPress={() => onDelete(item.id)} 
        containerStyle={styles.deleteIcon}
      />
        <Text style={styles.experienceCompanyName}>{item.companyName}</Text>
        <Text style={styles.experienceJobTitle}>{item.jobTitle}</Text>
        <Text style={styles.experienceDates}>{item.startDate} - {item.endDate}</Text>
        <Text style={styles.experienceDescription}>{item.description}</Text>
      </View>
    );
  };
  const EducationItem = ({ item, index }) => {
    const itemStyle = {
      ...styles.educationItem,
      marginRight:15,
      backgroundColor: colors[index % colors.length], // Pick a color based on index
    };
  
    return (
      <View style={itemStyle}>
        <Text style={styles.educationLevel}>{item.level}</Text>
        <Text style={styles.educationDomain}>{item.domain}</Text>
      </View>
    );
    };
  const ExperienceEducationList = ({ data,type,setExperience,setEducation }) => {
    const onDelete = (id) => {
        setExperience((prevExperience) => prevExperience.filter((exp) => exp.id !== id));
      };
    const renderItem = ({ item, index }) => {
        if (type === 'education') {
          return <EducationItem item={item} index={index} />;
        } else if (type === 'experience') {
          return <ExperienceItem item={item} index={index} onDelete={onDelete} />;
        }
      };
    
  
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    );
  };
  


const CVScreen = () => {
    const navigation = useNavigation()
    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const snapPoints = useMemo(() => ['85%', '50%', '70%'], []);

    const bottomSheetRef = useRef(null);
    const bottomSheetRefEduation = useRef(null);
    const handleCollapsePressEducation = () => bottomSheetRefEduation.current?.collapse();
    const handleClosePressEducation = () => bottomSheetRefEduation.current?.close();


    const handleClosePress = () => bottomSheetRef.current?.close();
    const handleOpenPress = () => bottomSheetRef.current?.expand();
    const handleCollapsePress = () => bottomSheetRef.current?.collapse();
    const snapeToIndex = (index) => bottomSheetRef.current?.snapToIndex(index);
    const renderBackdrop = useCallback(
        (props) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />,
        []
    );
    const [education, setEducation] = useState([]);
    const [level, setLevel] = useState('');
    const [domain, setDomain] = useState('');
    
    const addEducation = () => {
      const newEducation = {
        id: Math.random().toString(),
        level: level,
        domain: domain,
      };
    
      setEducation((prevEducation) => [...prevEducation, newEducation]);
      handleClosePressEducation();
    };
    

    
    const [company, setCompany] = useState('');
    const [title, setTitle] = useState('');
    const [dates, setDates] = useState('');
    const [duties, setDuties] = useState('');


    const AddExperienceButton = ({ onPress }) => {

        return (
            <TouchableOpacity style={styles.addExperienceButton} onPress={onPress}>
                <Text>Add</Text>
                <Icon name="plus" type="font-awesome" size={10} color="#000" />
            </TouchableOpacity>
        );
    };

    const [newExperience, setNewExperience] = useState({
        id: '',
        companyName: '',
        jobTitle: '',
        startDate: '',
        endDate: '',
        description: ''
    });

    const addExperience = () => {
        const newExperience = {
            id: Math.random().toString(),
            companyName: company,
            jobTitle: title,
            startDate: dates.split(' - ')[0],
            endDate: dates.split(' - ')[1],
            description: duties,
        };

        setExperience((prevExperience) => [...prevExperience, newExperience]);
        handleClosePress()
    };
    return (
        <SafeAreaView style={styles.container}>
         <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: "absolute",
              top:23,
              marginTop:5,
              left: 0,
            }}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              size={24}
              color={COLORS.black}
            />
          </TouchableOpacity>
            <View style={{ flexDirection: 'column' }}>
                <View style={styles.addExperiencecontainer}>

                    <Text style={styles.title}>Work Experiences</Text>
                    <AddExperienceButton onPress={handleCollapsePress} />

                </View>
                <ExperienceEducationList data={experience} type="experience" setExperience={setExperience} setEducation={setEducation}/>

</View>
            <View style={{ flexDirection: 'column' }}>
                <View style={styles.addExperiencecontainer}>

                    <Text style={styles.title}>Education</Text>
                    <AddExperienceButton onPress={handleCollapsePressEducation} />

                </View>
                <ExperienceEducationList data={education} type="education" />
            </View>

            <UploadCVScreen/>

            <BottomSheet
                ref={bottomSheetRef}
                index={-1}
                snapPoints={snapPoints}
                enablePanDownToClose={true}
                handleIndicatorStyle={{ backgroundColor: '#fff' }}
                backgroundStyle={{ backgroundColor: '#fff11' }}
                backdropComponent={renderBackdrop}
            >
                <ExperienceBottomSheet
                    company={company}
                    setCompany={setCompany}
                    title={title}
                    setTitle={setTitle}
                    dates={dates}
                    setDates={setDates}
                    duties={duties}
                    setDuties={setDuties}
                    addExperience={addExperience}
                />
            </BottomSheet>
            <BottomSheet
  ref={bottomSheetRefEduation}
  index={-1}
  snapPoints={snapPoints}
  enablePanDownToClose={true}
  handleIndicatorStyle={{ backgroundColor: '#fff' }}
  backgroundStyle={{ backgroundColor: '#1d0f4e' }}
  backdropComponent={renderBackdrop}
>
    <EducationForm 
        level={level} 
        setLevel={setLevel} 
        domain={domain} 
        setDomain={setDomain} 
        addEducation={addEducation} 
      />
</BottomSheet>



        </SafeAreaView>


    );

};

const styles = {
    container: {

        flex: 1,
        padding: 20,
       
        backgroundColor: '#f0f0f0',
    },
    addExperiencecontainer: {
        marginTop:19,
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 24,
        height: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    addEducationcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 24,
        height: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    title: {

    },
    experience: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        height: 70,
        borderColor: 'gray',
        borderWidth: 4,
        marginTop: 12,
    },
    addExperienceButton: {
        flexDirection: 'row',
        alignItems: 'center',

        backgroundColor: '',


    },

    contentContainer: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    input: {
        marginTop: 8,
        marginBottom: 8,
        backgroundColor: '#f0f0f0',
    },
    experienceItem: {
        width: 100,
        alignItems: 'center',
        // Adjust this value as needed
        // Other styles...
      },
      deleteIcon: {
        position: 'absolute',
        top: 0,
        right: 0,
        marginRight:3,
      },
};

export default CVScreen;
