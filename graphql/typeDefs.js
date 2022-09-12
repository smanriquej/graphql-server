import { gql } from "apollo-server";

export const typeDefs = gql`

  type Ocupacion02 {
    _id: ID!
    cod_indice:String
    descripcion_ocupacion: String
  }

  type Denominaciones03 {
    _id: ID!
    gran_grupo:Int
    grupo_primario:String
    ocupacion:String
    denominacion: String
    nombre_denominacion: String
    fuente_denominacion: String
    codigo_ciuo: String
  }

  type Conocimiento05 {
    _id: ID!
    gran_grupo:Int
    ocupacion:String
    id_conocimiento: String
    nombre_conocimiento: String
  }

  type Indice01 {
    _id: ID!
    cod_indice:String
    longitud_indice: String
    indice_gran_grupo:String
    indice_subgrupo_ppal:String
    indice_subgrupo:String
    indice_grupo_primario:String
    indice_perfil_ocupacional:String
    indice_denominacion_ocupacion:String
    nombre_cuoc_indice: String
    ocupacion: Ocupacion02
    conocimientos: [Conocimiento05]
    denominaciones: [Denominaciones03]
  }

  type Query {
    oneIndice(cod_indice: String!): Indice01
    allIndice: [Indice01]
    oneOcupacion(cod_indice: String): Ocupacion02
    allOcupaciones: [Ocupacion02]
    oneConocimiento(cod_indice: String): Conocimiento05
    allConocimientos: [Conocimiento05]
    oneDenominacion(cod_indice: String): Denominaciones03
    allDenominaciones: [Denominaciones03]
    filterOcupacion:[Indice01]
  }
`