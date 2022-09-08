import { ApolloServer, UserInputError, gql } from 'apollo-server';
import './db.js';
import Indice01 from './models/cuoc_indice01.js';
import Ocupacion02 from './models/cuoc_ocupacion02.js';

const typeDefinitions = gql`
  type Indice01 {
    _id: ID!
    cod_indice:String
    longitud_indice: String!
    indice_gran_grupo:String
    indice_subgrupo_ppal:String
    indice_subgrupo:String
    indice_grupo_primario:String
    indice_perfil_ocupacional:String
    indice_denominacion_ocupacion:String
    nombre_cuoc_indice: String!
    ocupacion: Ocupacion02
  }

  type Ocupacion02 {
    _id: ID
    cod_indice:String
    descripcion_cupacion: String
  }

  type Query {
    allIndice: [Indice01!]!
    allOcupacion: [Ocupacion02!]!
    findIndice(cod_indice: String!): Indice01
    findOcupacion(cod_indice: String!): Ocupacion02
  }
`

const resolvers = {
  Query: {
    allIndice: async (root, args) => {
      return Indice01.find({})
    },
    findIndice: async (root, args) => {
      const { cod_indice } = args
      return Indice01.findOne({ cod_indice });
    },
    allOcupacion: async (root, args) => {
      return Ocupacion02.find({})
    },
    // findOcupacion: async (root, args) => {
    //   const { cod_indice } = args
    //   return Ocupacion02.findOne({ cod_indice })
    // },
    findOcupacion: async () => {
      // const { cod_indice } = args
      return Ocupacion02.find()
      .then(ocupaciones => {
        return ocupaciones.map(ocupacion => {
          return { ...ocupacion._id, _id: ocupacion._id };
        });
      })
      .catch(err => {
        throw err;
      });
    },
  },
  Indice01: {
    ocupacion: ({ cod_indice }) => {
      return Ocupacion02.find(ocu => {
        return ocu.cod_indice === cod_indice
      })
    },
    // Ocupacion02: {

    // }

  }
}

const server = new ApolloServer ({
  typeDefs: typeDefinitions,
  resolvers
})

server.listen().then(({url}) => {
  console.log(`Server ready at ${url}`)
})