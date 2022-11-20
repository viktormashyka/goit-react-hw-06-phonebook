// import { Phonebook } from '../components/Phonebook/Phonebook';

// export const App = () => {
//   return (
//     <div>
//       <Phonebook onSubmit={values => console.log('values, ', values)} />
//     </div>
//   );
// };

import { Phonebook } from '../components/Phonebook/Phonebook';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <div>
      <Layout>
        <Phonebook />
      </Layout>
    </div>
  );
};
