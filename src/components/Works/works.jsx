import React, { useState, useEffect } from 'react'
import './works.scss'
import { getWorksData } from '../../Firebase'
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import MyModal from '../Modal/modal';

async function getWorkDetailsData(workId) {
    const db = getFirestore();
    const workDetailsCollection = collection(db, 'works', workId, 'workDetails');
    const workDetailsSnapshot = await getDocs(workDetailsCollection);
    return workDetailsSnapshot.docs.map(doc => doc.data());
}

function Works() {
    const [works, setWorks] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedWorkImages, setSelectedWorkImages] = useState([]);

    const storage = getStorage();

    // Ouverture de la modale
    const openModal = async (workId) => {
        const workDetailsData = await getWorkDetailsData(workId);
    
        const updatedWorksDetailsData = await Promise.all(
            workDetailsData[0].images.map(async (imagePath) => {
                const gsReference = ref(storage, imagePath);
                const url = await getDownloadURL(gsReference);
                return url;
            })
        );

        setSelectedWorkImages(updatedWorksDetailsData);
        setModalIsOpen(true);
        console.log("modalIsOpen: ", modalIsOpen);
        console.log("updatedWorksDetailsData: ", updatedWorksDetailsData)
    };
    
    // Fermeture de la modale
    const closeModal = () => {
        setModalIsOpen(false);
    }
  
    useEffect(() => {
        const fetchWorks = async () => {
          const worksData = await getWorksData();

          const storage = getStorage();
          const updatedWorksData = await Promise.all(
            worksData.map(async (work) => {
                const imagePath = work.imageUrl.replace('gs://mon-portfolio-b5efe.appspot.com/', '');
                const gsReference = ref(storage, imagePath);
                const url = await getDownloadURL(gsReference);
                return {
                    ...work,
                    imageUrl: url,
                };
            })
          );

          setWorks(updatedWorksData);
        };
  
      fetchWorks();
    }, []);

    return (
        <section id='works'>
            <h2 className='worksTitle'>Réalisations</h2>
            <span className='worksDesc'>Ici, vous découvrirez une sélection de mes réalisations les plus marquantes en tant que développeur.
             Chaque projet est le reflet de ma passion pour le codage et mon engagement à créer des solutions efficaces et innovantes. Bonne exploration !</span>
             <div className='work-list-container'>
                {works.map((work) => (
                <div className='work-card' key={work.id} onClick={() => openModal(work.id)}>
                    <img className='work-cover' src={work.imageUrl} alt={work.title} />
                    <div className='work-card-description'>
                        <h3 className='img-title'>{work.title}</h3>
                        <p className='work-languages'>#{work.languages}</p>
                    </div>
                </div>
                ))}
            </div>
            <MyModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                images={selectedWorkImages}
            >

            </MyModal>
        </section>
    );
}

export default Works