const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb:localhost://27017/practice', {});

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,	//uppercase: true , for uppercase
		trim: true,
		minlength: 5,
		maxlength: [20, "Length should be less that 20 char"],	//can also add our custom message
	},
	age: {
		type: Number,
		min: 1,
		max: 100,

		//for user defined validation
		validate ( value ) {
			if ( value % 4 === 0 )
			{
				throw new Error("Value should not devisible by 4")
			}
		}
	},
	ctype: {
		type: String,
		enum: ['female', 'male']	//ctype can have value only 'female' or 'male'
	},
	email: {
		type: String,
		validate ( value ) {
			// to use validator we need to install validator module
			if ( !validator.isEmail( value ) )
			{
				throw new Error("Please provide valid email")
			}
		}
	}
});

const User = new mongoose.model('user', userSchema); //mongoose will automatically make user as users

const getData = async () => {
	try {
		// $in is operator same as in operator in sql
		// $nin is same as not in
		const data = await User.find({
			name: { $in: ['Sachin', 'Pradeep'] },
		})
			.select({ name: 1, _id: 0 })
			.limit(1);

		console.log(data);

		data = await User.find({
			name: {
				$or: [{ name: { $in: ['Sachin', 'Pradeep'] } }, { age: { $gt: 21 } }],
			},
		});

		data = await User.find({
			name: {
				$and: [{ name: { $in: ['Sachin', 'Pradeep'] } }, { age: { $gt: 21 } }],
			},
		});

		data = await User.find({
			name: {
				$and: [{ name: { $in: ['Sachin', 'Pradeep'] } }, { age: { $gt: 21 } }],
			},
		}).countDocuments(); //to get the count

		data = await User.find({
			name: {
				$and: [{ name: { $in: ['Sachin', 'Pradeep'] } }, { age: { $gt: 21 } }],
			},
		}).sort({ name: 1 }); //will sort in asc(as value is 1) based on name field //for desc use -1


		// to update, if we use updateOne or updateMany then these function does not return updated document
		// to get the updated document we need to use findByIdAndUpdate or findByIdAndUpdateMany
		// but we get old document not the updated one
		// const updatedDocument = await User.updateOne( { _id }, { $set: { name: "SK" } } );
		const updatedDocument = await User.findByIdAndUpdate( { _id },
			{ $set: { name: "SK" } },
			{
				new: true,	//to get the updated document set it true but to get original doc then set it to false
				useFindAndModify: false
			} );

		// to delte the record and store it into a constant
		// if we use onlu deleteOne or deleteMany then they will not return deleted document 
		const deletedDocument = await User.findByIdAndDelete( { _id } );
	} catch (error) {}
};



6397806948