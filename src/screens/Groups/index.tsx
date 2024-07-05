import { Container } from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/HighLights';
import { GroupCard } from '@components/GroupCard';
import { FlatList } from 'react-native';
import { useState } from 'react';
import { ListEmpty } from '@components/ListEmpty';


export  function Groups() {
 
  const [groups, setGroups] = useState<string[]>(['Galera da Rocket', 'Abestalhados', 'Rocket']);

  return (
    <Container>
      <Header/>
      <Highlight
      title="Turmas"
      subtitle="Jogue com sua turma"
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
        <GroupCard title={item}/>
        
        )}

        contentContainerStyle={(groups.length===0 && {flex: 1})}

        ListEmptyComponent={()=> (
          <ListEmpty
          message = "Que tal cadastrar uma nova turma ?"
          />
        )}
      />

       
    </Container>
  );
}

