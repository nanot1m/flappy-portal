// Сам по себе класс Observable пустой
// здесь мы его пичкаем нужными нам методами
// это нужно чтобы не тащить всю сборку
// и минимизировать размер бандла

// # Observable
// - contructors
import 'rxjs/add/observable/interval'
import 'rxjs/add/observable/fromEvent'

// - operators
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/zip'
import 'rxjs/add/operator/skip'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/withLatestFrom'
