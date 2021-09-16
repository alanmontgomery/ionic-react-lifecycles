import { IonBackButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewDidLeave, useIonViewWillEnter, useIonViewWillLeave } from '@ionic/react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Page2: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  useEffect(() => {

    console.log("In useEffect");

    return () => {

      console.log("In useEffect cleanup");
    }
  }, []);

  useIonViewWillEnter(() => {

    console.log("In useIonViewWillEnter");
  });

  useIonViewDidEnter(() => {

    console.log("In useIonViewDidEnter");
  });

  useIonViewWillLeave(() => {

    console.log("In useIonViewWillLeave");
  });

  useIonViewDidLeave(() => {

    console.log("In useIonViewDidLeave");
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} />
      </IonContent>
    </IonPage>
  );
};

export default Page2;
