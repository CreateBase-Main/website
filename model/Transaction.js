/*=========================================================================================
REQUIRED MODULES
=========================================================================================*/

const mongoose = require("mongoose");
const moment = require("moment-timezone");

/*=========================================================================================
VARIABLES
=========================================================================================*/

const Schema = mongoose.Schema;

/*=========================================================================================
CREATE TRANSACTION MODEL
=========================================================================================*/

const TransactionSchema = new Schema({
  service: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  entity: {
    sender: {
      type: Schema.Types.ObjectId,
      required: true
    },
    receiver: {
      type: Schema.Types.ObjectId,
      required: true
    }
  },
  date: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  metadata: {
    type: Schema.Types.Mixed,
    default: {}
  }
});

/*=========================================================================================
STATIC
=========================================================================================*/

// @FUNC  createCheckout
// @TYPE  STATIC - PROMISE - ASYNC
// @DESC  Create a transaction instance for a checkout payment
// @ARGU  
TransactionSchema.statics.createCheckout = (type, sender, amount, metadata) => {
  return new Promise(async (resolve, reject) => {
    // DECLARE AND INITIALISE VARIABLES
    const service = "checkout";
    // TO DO.....
    // Replace Receiver Id with CreateBase's Account ID
    // TO DO.....
    const receiver = "0123456789abcdefghij"; // TEMPORARY
    const entity = { sender, receiver };
    const date = moment().tz("Pacific/Auckland").format();
    // CREATE THE TRANSACTION INSTANCE
    const transaction = new this({ service, type, entity, date, amount, metadata });
    // SAVE THE TRANSACTION INSTANCE
    let savedTransaction;
    try {
      savedTransaction = await transaction.save();
    } catch (error) {
      return reject(error);
    }
    // RESOLVE PROMISE
    return resolve(savedTransaction);
  })
}

/*=========================================================================================
EXPORT ITEM MODEL
=========================================================================================*/

module.exports = Transaction = mongoose.model("transactions", TransactionSchema);

/*=========================================================================================
END
=========================================================================================*/