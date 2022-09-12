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

   type Funciones04 {
    _id: ID!
    gran_grupo:Int
    ocupacion:String
    consecutivo_funcion: String
    redaccion_funcion: String
    fuente_ciuo: String
    fuente_cno: String
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
    funciones: [Funciones04]
  }

  type Query {
    filterOcupacion:[Indice01]
    oneIndice(cod_indice: String!): Indice01
    allIndice: [Indice01]
    selectOcupacion(cod_indice: String): Ocupacion02
    allOcupaciones: [Ocupacion02]
    selectConocimiento(ocupacion: String): [Conocimiento05]
    allConocimientos: [Conocimiento05]
    selectDenominacion(ocupacion: String): [Denominaciones03]
    allDenominaciones: [Denominaciones03]
    selectFunciones(ocupacion: String): [Funciones04]
    allFunciones: [Funciones04]
  }
`