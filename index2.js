import { ApolloServer, UserInputError, gql } from 'apollo-server';
import { GraphQLID, GraphQLObjectType } from 'graphql';
import './db.js';
import Indice01 from './models/cuoc_indice01.js';
import Ocupacion02 from './models/cuoc_ocupacion02.js';


const IndiceType = new GraphQLObjectType({
  name: 'Indice',
  fields: () => ({
    _id: { type: GraphQLID },
    cod_indice: { type: GraphQString },
    longitud_indice: { type: GraphQString },
    indice_gran_grupo: { type: GraphQString },
    indice_subgrupo_ppal: { type: GraphQString },
    indice_subgrupo: { type: GraphQString },
    indice_grupo_primario: { type: GraphQString },
    indice_perfil_ocupacional: { type: GraphQString },
    indice_denominacion_ocupacion: { type: GraphQString },
    nombre_cuoc_indice: { type: GraphQString },
    // ocupacion: Ocupacion02
    ocupacion: {
      type: OcupacionType,
      resolve (parent, args){
        console.log(parent);
        return _.find(ocupaciones, { cod_indice: parent.cod_indice});
      }
    }
  })
});

const OcupacionType = new GraphQLObjectType({
  name: 'Ocupacion',
  fields: () => ({
    _id: { type: GraphQLID },
    cod_indice: { type: GraphQString },
    descripcion_cupacion: { type: GraphQString },
    // ocupacion: Ocupacion02
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootWueryType',
  fields: {
    indice: {
      type: IndiceType,
      args: { cod_indice: { type: GraphQString } },
      resolve ( parent, args) {
        console.log(typeof(args.cod_indice));
        return _.find(indices, { cod_indice: args.cod_indice });
      }
    },
    ocupacion: {
      type: OcupacionType,
      args: { cod_indice: { type: GraphQString } },
      resolve (parent, args){
        return _.find(ocupaciones, { cod_indice: args.cod_indice});
      }
    }
  }
});

const server = new ApolloServer({
  typeDefs: {IndiceType, OcupacionType},
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})