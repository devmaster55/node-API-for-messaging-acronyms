const modelName = 'Acronym';

module.exports = mongoose => {
  const schema = mongoose.Schema(
    {
      acronym: String,
      definition: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  return mongoose.model(modelName, schema);
};