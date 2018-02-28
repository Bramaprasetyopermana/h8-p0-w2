var nama = 'Nina';
var peran = 'Ksatria';
if (nama === '') {
	console.log('Nama harus diisi!');
} else if (peran === '') {
	console.log('Halo ' + nama + ' , Pilih peranmu untuk memulai game!');
} else {
	if (nama === 'Nina' && peran === 'Ksatria') {
		console.log(
			'Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!'
		);
	}
}
