import Indice01 from '../models/cuoc_indice01.js';
import Ocupacion02 from '../models/cuoc_ocupacion02.js';
import Conocimiento05 from '../models/cuoc_conocimiento05.js';
import Denominaciones03 from '../models/cuoc_denominaciones03.js';
import Funciones04 from '../models/cuoc_funciones04.js';


export const resolvers = {
  Query: {
    filterOcupacion: async () => {
      try {
        let filter = { longitud_indice: 5 }
        const indices = await Indice01.find(filter)
      return indices;
      } catch(error) {
        throw error;
      }
    },
    oneIndice: async(_, args) => {
      try {
        let filter = { ...args };
        if(args.cod_indice){
          filter = {
            longitud_indice: 5,
            cod_indice: args.cod_indice
          }
        }
        // const indice = await Indice01.findOne(filter).populate("conocimientos");
        const indice = await Indice01.findOne(filter)
          .populate({ path: 'ocupacion', model: Ocupacion02 })
          .populate({ path: 'conocimientos', model: Conocimiento05 })
          .populate({ path: 'denominaciones', model: Denominaciones03 })
          .populate({ path: 'funciones', model: Funciones04 });
        
      return indice;
      } catch (error) {
        throw error;
      }
    },
    allIndice: async () => {
      try {
        let filter = { longitud_indice: 5 }
        const indices = await Indice01.find(filter)
          .populate({ path: 'ocupacion', model: Ocupacion02 })
          .populate({ path: 'conocimientos', model: Conocimiento05 })
          .populate({ path: 'denominaciones', model: Denominaciones03 })
          .populate({ path: 'funciones', model: Funciones04 });
        return indices;
      } catch (error) {
        throw error;
      }
    },
    selectOcupacion: async (_, { cod_indice }) => {
      try {
        const ocupacion = await Ocupacion02.findOne({ cod_indice });
        if (ocupacion) {
          return ocupacion
        } else {
          throw new Error('Ocupacion no encontrada...');
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    allOcupaciones: async () => {
      try {
        return await Ocupacion02.find({})
      } catch (error) {
        throw new Error(error);
      }
    },
    selectConocimiento: async (_, { ocupacion }) => {
      try {
        const conocimientos = await Conocimiento05.find({ ocupacion });
        if (conocimientos.length > 0) {
          return conocimientos
        } else {
          throw new Error('Conocimientos no encontrados...');
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    allConocimientos: async () => {
      try {
        return await Conocimiento05.find({})
      } catch (error) {
        throw new Error(error);
      }
    },
    selectDenominacion: async (_, { ocupacion }) => {
      try {
        const denominaciones = await Denominaciones03.find({ ocupacion });
        if (denominaciones) {
          return denominaciones
        } else {
          throw new Error('Denominaciones no encontradas...');
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    allDenominaciones: async () => {
      try {
        return await Denominaciones03.find({})
      } catch (error) {
        throw new Error(error);
      }
    },
    selectFunciones: async (_, { ocupacion }) => {
      try {
        const funciones = await Funciones04.find({ ocupacion });
        if (funciones) {
          return funciones
        } else {
          throw new Error('Funciones no encontradas...');
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    allFunciones: async () => {
      try {
        return await Funciones04.find({})
      } catch (error) {
        throw new Error(error);
      }
    },
  }
}