import React, {useEffect} from 'react';

import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './general.css';

import Onboarding from './pages/onboarding';
import Ideation from './pages/ideation/Ideation';
import Suggestion from './pages/suggestion/Suggestion';
import Finish from './pages/finish/Finish';
import Dashboard from './pages/Dashboard';
import useVK from './useVK';
import useVKGroupID from './useVKGroupID';

import firebase from './firebase';

const db = firebase.firestore();

const App = () => {
  const [activePanel, setActivePanel] = React.useState<Panels>('onboarding');
  const [selectedProducts, setSelectedProducts] = React.useState<string[]>([
    '4000109446937',
    '32222023154'
  ]);
  const [selectedTheme, setSelectedTheme] = React.useState<any | undefined>(
    undefined
  );
  const { token, fetchedUser } = useVK();
  const groupID = useVKGroupID();
  console.log(groupID);

  const updateSelectedProducts = (selectedProducts:any) => React.useCallback(() => db.collection('communities').doc(groupID.toString()).update({
    products: selectedProducts
  }), []);



  useEffect(() => {
    if (groupID) {
      return db.collection('communities').doc(groupID.toString()).onSnapshot(async doc => {
        if (!doc.exists) {
          await doc.ref.set({
            id: groupID,
            products: selectedProducts
          });
        } else {
          const snapshot = doc.data();
          if (snapshot) {
            setSelectedProducts(snapshot.products);
          }
        }
      });
    }
  }, [groupID]);

  const go = (id: Panels) => setActivePanel(id);

  const addProduct = (productId: string) => {
    updateSelectedProducts([...selectedProducts, productId])
  };

  const removeProduct = (productId: string) => {
    updateSelectedProducts(selectedProducts.filter(p => p !== productId));
  };

  return (
    <View className="global" activePanel={activePanel} header={false}>
      <Onboarding id="onboarding" go={go} />
      <Suggestion
        id="suggestion"
        go={go}
        token={token}
        selectedTheme={selectedTheme}
        selectedProducts={selectedProducts}
        addProduct={addProduct}
        removeProduct={removeProduct}
      />
      <Ideation
        id="ideation"
        go={go}
        updateTheme={(theme: any) => setSelectedTheme(theme)}
        selectedTheme={selectedTheme}
      />
      <Dashboard
        id="dashboard"
        go={go}
        selectedTheme={selectedTheme}
        selectedProducts={selectedProducts}
        token={token}
        groupId={groupID}
      />
      <Finish id="finish" go={go} />
    </View>
  );
};

export default App;
